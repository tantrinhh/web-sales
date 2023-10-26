import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/RootReducer';
interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  city: string;
  province: string;
  ZIPcode: string;
  phone: string;
  email: string
}
const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

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

  return (
    <div className='container grid grid-cols-2 mt-10'>
        <div className='col-span-1 space-y-5'>
            <h1 className='text-[36px] font-semibold leading-[54px]'>Billing details</h1>
            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  
                        <input
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                          })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none"
                          type="text"
                        />
                      {errors.firstName && <p>This field is required</p>}
{errors.firstName?.type === "maxLength" && (
  <p>First name cannot exceed 20 characters</p>
)}
{errors.firstName?.type === "pattern" && <p>Alphabetical characters only</p>}



                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                 
                        <input
                          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 leading-tight focus:outline-none"
                          type="text"
                        />
                         {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
                     
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Company Name (Optional)
                  </label>
                    
                        <input
                        {...register("companyName", { required: true })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />

                </div>
              </div>
              <div className="inline-block relative w-full mb-6">
              <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Country / Region
                  </label>
              <select className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline" {...register("companyName", { required: true })}>
                <option value="" placeholder="First name">Sri Lanka</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
                    Street address
                  </label>
                   
                        <input
                        {...register("streetAddress", { required: true })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Town / City
                  </label>
                 
                        <input
                        {...register("city", { required: true })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />

                </div>
              </div>
              <div className="inline-block relative w-full mb-6">
              <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Province
                  </label>
              <select className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline" {...register("province", { required: true })}>
                <option value="" >Western Province</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    ZIP code
                  </label>
                  
                        <input
                        {...register("ZIPcode", { required: true })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Phone
                  </label>
                 
                        <input
                        {...register("phone", { required: true })}
                          className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
                    Email address
                  </label>
                 
                        <input
                        {...register("email", { required: true })}
                            className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none "
                          type="text"
                        />
  
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-20 mt-12">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none " placeholder='Additional information'/>
                </div>
              </div>
            </form>
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
            <button className="border border-[#000000] rounded-2xl bg-white w-[318px] h-[64px] font-normal text-xl ml-20" type="submit" >Place order</button>
          </div>
        </div>
    </div>
  )
}

export default Checkout


