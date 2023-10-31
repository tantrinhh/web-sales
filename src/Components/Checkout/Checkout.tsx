import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/RootReducer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ExcelJS from 'exceljs';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  city: string;
  district: string;
  ward: string;
  streetAddress: string;
  province: string;
  ZIPcode: string;
  phone: string;
  email: string;
  productName: string;
  price: number;
  count: number;
  totalPrice: string;
  totalItem: number;
  total: number;
  product: string;
}
const Checkout = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      city: "",
      district: "",
      ward: "",
      streetAddress: "",
      province: "",
      ZIPcode: "",
      phone: "",
      email: "",
      productName: "",
      price: 0,
      count: 0,
      totalPrice: "",
      totalItem: 0,
      total: 0,
    },
  });

  const { cartItems } = useSelector((state: RootState) => state.cart);

 

  const priceTotal = () => {
    let totalPrice = 0;

    if (cartItems.length > 0) {
      cartItems.map((item: any) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json'
        );
        if (response.status === 200) {
          setCities(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const [selectedCity, setSelectedCity] = useState("");
const [selectedDistrict, setSelectedDistrict] = useState("");
const [selectedWard, setSelectedWard] = useState("");

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = e.target.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);

    if (selectedCity) {
      setDistricts(selectedCity.Districts);
      setSelectedCity(selectedCityId);
    } else {
      setDistricts([]);
    }

    setWards([]);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrictId = e.target.value;
    const selectedCityId = (document.getElementById('city') as HTMLSelectElement)?.value;
    const selectedCity = cities.find((city) => city.Id === selectedCityId);

    if (selectedCity) {
      const selectedDistrict = selectedCity.Districts.find(
        (district: { Id: string; }) => district.Id === selectedDistrictId
      );
      if (selectedDistrict) {
        setWards(selectedDistrict.Wards);
        setSelectedDistrict(selectedDistrictId);
      } else {
        setWards([]);
      }
    }
  };
  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWardId = e.target.value;
    setSelectedWard(selectedWardId);
  };
  const generateExcelFile = (data: FormData) => {
    // Tạo một Workbook mới
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Order');
    const totalItem = calculateTotalQuantity();
    const totalPrice = priceTotal().toLocaleString();
    // Định dạng cột trong tệp Excel
    worksheet.columns = [
      { header: 'First Name', key: 'firstName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Company Name', key: 'companyName' },
      { header: 'Country', key: 'country' },
      { header: 'City', key: 'city' },
      { header: 'District', key: 'district' },
      { header: 'Ward', key: 'ward' },
      { header: 'Street Address', key: 'streetAddress' },
      { header: 'ZIP code', key: 'ZIPcode' },
      { header: 'Phone', key: 'phone' },
      { header: 'Email', key: 'email' },
      { header: 'Product', key: 'product' },
      // { header: 'Price', key: 'price' },
      // { header: 'Count', key: 'count' },
      // { header: 'Total', key: 'total' },
      { header: 'Total item', key: 'totalItem' },
      { header: 'Total price', key: 'totalPrice' },
    ];
    // Thêm dữ liệu từ biểu mẫu vào tệp Excel
    data.totalItem = totalItem;
    data.totalPrice = totalPrice;
    worksheet.addRow(data);
  
    // Tạo tệp Excel và tải xuống
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'order.xlsx';
      a.click();
    });
  };
  const onSubmit = (data: FormData) => {
    data.city = cities.find((city) => city.Id === selectedCity)?.Name || "";
  data.district = districts.find((district) => district.Id === selectedDistrict)?.Name || "";
  data.ward = wards.find((ward) => ward.Id === selectedWard)?.Name || "";
    // Chèn danh sách sản phẩm vào đối tượng data
    data.product = cartItems.map((item) => `${item.name} x ${item.count}`).join(', ');
    generateExcelFile(data);
  };
  return (
    <div className='container grid grid-cols-2 mt-10'>
        <div className='col-span-1 space-y-5'>
            <h1 className='text-[36px] font-semibold leading-[54px]'>Billing details</h1>
            <div className="w-full max-w-lg" >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: {
                    message: 'First name is required',
                    value: true,
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Invalid first name',
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label htmlFor="first_name" className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">Tên</label>
                  <input type="text"  value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>
                  
                )}
              />
              <span className="text-red-500">{errors.firstName?.message}</span>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <Controller
                name="lastName"
                control={control}
                rules={{
                  required: {
                    message: 'Last name is required',
                    value: true,
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: 'Invalid last name',
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label htmlFor="last_name" className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">Họ</label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>
                  
                )}
              />
              <span className="text-red-500">{errors.lastName?.message}</span>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <Controller
                name="companyName"
                control={control}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    Tên công ty (không bắt buộc)
                  </label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>            
                )}
              />
                </div>
              </div>
                <div className="inline-block relative w-full mb-6">
                   <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Tỉnh / Thành phố
                  </label>
              <select id="city" onChange={handleCityChange} className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline" >
              <option value="">
                  Chọn tỉnh / thành phố
                </option>
                {cities.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.Name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
                </div>
                <div className="inline-block relative w-full mb-6">
                <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Quận / Huyện
                  </label>
              <select id="district" onChange={handleDistrictChange} className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline" >
              <option value="">
                  Chọn quận / huyện
                </option>
                {districts.map((district) => (
                  <option key={district.Id} value={district.Id}>
                    {district.Name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
                </div>
                <div className="inline-block relative w-full mb-6">
                <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Phường / Xã
                  </label>
              <select id="ward" onChange={handleWardChange} className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline" >
                <option value="">
                  Chọn phường / xã
                </option>
                {wards.map((ward) => (
                  <option key={ward.Id} value={ward.Id}>
                    {ward.Name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
                </div>
              <div className="inline-block relative w-full mb-6">
              <Controller
                name="streetAddress"
                control={control}
                rules={{
                  required: {
                    message: 'Street address is required',
                    value: true,
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    Địa chỉ
                  </label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>            
                )}
              />
              <span className="text-red-500">{errors.streetAddress?.message}</span>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <Controller
                name="ZIPcode"
                control={control}
                rules={{
                  required: {
                    message: 'ZIP code is required',
                    value: true,
                  },
                  pattern: {
                    value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                    message: 'Invalid ZIP code',
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    ZIP code
                  </label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>
                  
                )}
              />
              <span className="text-red-500">{errors.ZIPcode?.message}</span>

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <Controller
                name="phone"
                control={control}
                rules={{
                  required: {
                    message: 'Phone is required',
                    value: true,
                  },
                  pattern: {
                    value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                    message: 'Invalid phone number',
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    Số điện thoại
                  </label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>
                  
                )}
              />
              <span className="text-red-500">{errors.phone?.message}</span>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <Controller
                name="email"
                control={control}
                rules={{
                  required: {
                    message: 'Email is required',
                    value: true,
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field: { onChange, value } }:any) => (
                  <div>
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    Email
                  </label>
                  <input type="text" value={value}
                  onChange={onChange} className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none" required/>
              </div>
                  
                )}
              />
              <span className="text-red-500">{errors.email?.message}</span>
                </div>
              </div>
            </div>
        
            
        </div>
        <div className="col-span-1 mt-12 space-y-3 container">
          <div className="flex justify-between">
            <p className="text-[24px] font-medium leading-[36px]">Product</p>
            <p className="text-[24px] font-medium leading-[36px]">Subtotal</p>
          </div>
 
            {cartItems.map((item)=>{
              return(
                <div className="flex justify-between">
                  <div>
                    <ul>
                      <li className="text-[#9F9F9F] text-[16px] leading-[24px] font-normal">{item.name} x {item.count}</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="font-light leading-[24px] text-[16px]">Rs. {item.price}</li>
                    </ul>   
                  </div>                        
                </div>
              )
            })}
         
          <div className="flex justify-between">
            <p className="font-normal text-[16px] leading-[24px]">Total item</p>
            <p className="font-light leading-[24px] text-[16px]">{calculateTotalQuantity()}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-[16px] leading-[24px]">Total</p>
            <p className="font-medium leading-[36px] text-[24px] text-[#B88E2F]">Rs. {priceTotal().toLocaleString()}</p>
          </div>
          <div className="border-b-2 border-[#D9D9D9]"></div>
          <div className="space-y-5">
            <div className='flex gap-5'>
              <div className="rounded-full w-[14px] h-[14px] pt-1.5 bg-[#000000] mt-3"></div>
              <p className="mt-2 text-base font-normal">Direct Bank Transfer</p>
            </div>
            <p className="font-light text-base text-[#9F9F9F] text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className="flex items-center mb-4">
              <input id="default-radio-1" type="radio" defaultValue="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]" />
              <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-[#9F9F9F] dark:text-[#9F9F9F]">Direct Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input defaultChecked id="default-radio-2" type="radio" defaultValue="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]" />
              <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-[#9F9F9F] dark:text-[#9F9F9F]">Cash On Delivery</label>
            
            </div>
            <p className="text-base font-light text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            <button onClick={handleSubmit(onSubmit)} className="border border-[#000000] rounded-2xl bg-white w-[318px] h-[64px] font-normal text-xl ml-20" type="submit" >Place order</button>
      </div>
     </div>
</div>
    
  )
}

export default Checkout


