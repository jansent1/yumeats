const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="quick-delivery"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get the App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limited Convenience on-demand
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tortor justo, viverra nec felis nec, laoreet porta odio.
            Pellentesque eget hendrerit tortor. Pellentesque at metus sed odio
            tincidunt volutpat. Phasellus bibendum tortor sapien, eget egestas
            leo vulputate eget. Nullam ac convallis arcu. Nullam sed massa a
            velit viverra tempus ac sed purus. Maecenas lobortis, felis et
            finibus posuere, quam arcu aliquet leo, nec semper nisl libero
            scelerisque nibh. Pellentesque semper maximus lorem quis lobortis.
            Praesent sed congue nisl. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Ut fringilla neque
            vitae odio finibus scelerisque. Pellentesque quis enim mattis,
            mattis ex id, tincidunt justo. Cras neque urna, laoreet laoreet
            risus at, ullamcorper dignissim tortor. Curabitur sed enim at urna
            semper mollis.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Delivery;
