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
            <div className="row">
              <div className="col-md-6 ps-0"><img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/></div>
              <div className="col-md-6 pe-0"><img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/></div>
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
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
                <div className="row mb-3">
                  <img className="hero-img" src="https://via.placeholder.com/700x500/5F35F7"/>
                </div>
              </div>
              <div className="col-md-4">                
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

        {/* black background text section */}
        <section>
          <div className="container">
            <div className="row bg1 pt-5">
              <div className="col-md-6">
                <h2 className="heading3 pe-5">
                  Proin enim enim, tincidunt consequat sollicitudin.
                </h2>
              </div>
              <div className="col-md-6">
                <p className="paragraph3 ps-5">
                  Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh 
                  tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo 
                  nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. 
                  Nulla quis tincidunt turpis. Sed quis erat arcu. 
                </p>
                <p className="paragraph3 ps-5">
                  Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus 
                  vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, 
                  libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
                </p>
              </div>              
            </div>
          </div>

        </section>
       
      </main>    
    </div>
  )
}
