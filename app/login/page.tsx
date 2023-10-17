import { Button } from "antd"

const Page: React.FC = () => {
    return (
        <div className="login">

            <div className="card w-96 " style={{ border: "1px solid grey", width: '80%' }}>
                <div className="card-body " >
                    <h1 className="card-title text-black text-3xl font-bold">4 days - 3 nights</h1>
                    <h2>Bali to Nusa Penida</h2>
                    <div className='text-right'>
                        4.72 <b>.</b> 60 reviews</div>
                    <p >From</p>
                    <h1 className='text-black'>$ <span className='font-bold text-5xl'>572</span> USD</h1>

                    <Button className='btn-primary' style={{ borderRadius: '20px' }}>Book now</Button>
                </div>
            </div>
        </div>
    )
}

export default Page