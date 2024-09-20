export const About = () => {
    return (
        <section className="w-full py-10">
            <div className="container">
                <div className="w-full flex items-center justify-center">
                    <h1 className="text-white text-5xl font-semibold mb-5">
                        Contact us
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-white text-md">10 Anson Road #27-18</p>
                    <p className="text-white text-md">International Plaza, Singapore 079903</p>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=be@edufied.network" className="text-gray-300 text-md hover:underline ">be@edufied.network</a>
                </div>
            </div>
        </section>
    );
}