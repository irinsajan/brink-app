import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Brink App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>  
        {/* heading section */}      
        <header>
          <div className="container-fluid">
              <div className="header">
                <p className="paragraph1">Luctus vitae</p>
                <h1 className="heading1">Utrum ut placerat nec, varius sit amet lacus.</h1>
              </div>
          </div>
        </header>

        {/* 2 image hero section */}
        <section>
          <div className="container-fluid">
            <div className="row d-none d-md-flex">
              <div className="col-md-6 ps-0 mb-3 col-img1"><img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/></div>
              <div className="col-md-6 pe-0 mb-3 col-img2"><img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/></div>
            </div>
          

            <div id="carouselExampleSlidesOnly" class="carousel slide d-block d-md-none" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block hero-img" src="https://via.placeholder.com/700x500/5F35F7" />
                </div>
                <div class="carousel-item">
                  <img class="d-block hero-img" src="https://via.placeholder.com/700x500/5F35F7" />
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* text section */}
        <section>
          <div className="container">
            <div className="row justify-content-center mt-5 mb-4">
              <div className="col-md-4">
                <h2 className="heading2 text-center">
                  Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
                </h2>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-md-5">
                <p className="paragraph2">
                  Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae. Quisque maximus ante sapien, at 
                  phareta sam sagittis eu. Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.
                </p>
                <p className="paragraph2">
                  Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem turpis, rutrum ut placerat
                  nec, varius sit amet lacus, Praesent sed viverra lorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* gallery section */}
        <section>
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
              </div>
              <div className="col-md-4 mb-3">                
                  <img className="hero-img" src="https://via.placeholder.com/700x1030/5F35F7"/>                
              </div>
              <div className="col-md-4">
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* black background sections */}
        <section>
          <div className="container-fluid bg1">
            <div className="row pt-5">
              <div className="order-md-1 col-md-6">
                <h2 className="heading3 pe-5">
                  Proin enim enim, tincidunt consequat sollicitudin.
                </h2>
              </div>
              <div className="order-md-2 col-md-6">
                <p className="paragraph3">
                  Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh 
                  tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo 
                  nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. 
                  Nulla quis tincidunt turpis. Sed quis erat arcu. 
                </p>
              </div>
              <div className="order-md-5 col-md-8">                
                  <img className="hero-img" src="https://via.placeholder.com/700x400/5F35F7"/>                
              </div>
              <div className="order-md-3 col-md-6">
              </div>
              <div className="order-md-4 col-md-6">
                <p className="paragraph3">
                  Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus 
                  vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, 
                  libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
                </p>
              </div>               
              <div className="order-md-last col-md-8 ms-auto overlap">                
                  <img className="hero-img" src="https://via.placeholder.com/700x400/4425B2"/>                
              </div>
            </div>
          </div>
        </section>
          
       

        {/* footer section */}
        <section>
          <div className="container-fluid bg1">
            <div className="row py-4 justify-content-center">
              <div className="col-md-11">
                <hr className="style-one"></hr>
              </div>
            </div>
            <div className="row py-4 footer-columns">
              <div className="col-md-4 mb-3">
                <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
              </div>
              <div className="col-md-4 mb-3">
                <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
              </div>
              <div className="col-md-4 mb-3">
                <h2 className="heading3 pe-5">
                  Proin enim enim, tincidunt consequat sollicitudin.
                </h2>
              </div>
            </div>
          </div>
        </section>
       
      </main>    
    </div>
  )
}
