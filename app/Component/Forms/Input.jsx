import { useField } from "formik";

const Input = ({
    className='', 
    inputStyle='', 
    placeholder='', 
    withTitle=false, 
    title='', 
    type='text',
    name='',
    showError='true',
    }) => {

        const [field, meta] = useField(name);

    return (

        <div className={`flex flex-col gap-1 w-full text-[14px] font-thin ${className}`}>
            {withTitle && <p>{title}</p>}
            <div className="w-full">
                <input 
                    className={`border-1 font-thin focus:outline-none w-full ${(meta.error && meta.touched) ? 'border-[red]' : 'border-input'} px-3 py-2 ${inputStyle}`} 
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    {...field}

                />
                { showError && (meta.error && meta.touched) && <p className="text-[11px] text-[red]">{meta.error}</p>}
            </div>
        </div>
    )
}

export const InputNoFormik = ({
    className='', 
    inputStyle='', 
    placeholder='', 
    withTitle=false, 
    title='', 
    type='text',
    handleChange= ()=>{}
   
    }) => {


    return (

        <div className={`flex flex-col gap-1 w-full text-[14px] ${className}`}>
            {withTitle && <p>{title}</p>}
            <input 
                className={`border-1 focus:outline-none w-full border-input px-3 py-2 ${inputStyle}`} 
                placeholder={placeholder}
                type={type}
                onChange={handleChange}

            />
            
        </div>
    )
}

export default Input