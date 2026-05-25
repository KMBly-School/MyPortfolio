import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import profileImg from './assets/PhotoOfMeCropped.JPG'
import dashboardImg from './assets/Dashboard.jpg'
import dentalImg from './assets/Dental.webp'
import estoreImg from './assets/Estore.png'
import memoryImg from './assets/Memory.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <meta charset="UTF-8"/>
      <meta httpEquiv = "X-UA-Compatible" content = "IE=edge"/>
      <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

      <title>Assignment 1</title>
        
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n .p1 {\n font-family: "Times New Roman", Times, serif;\n }\n \n body{ \n background-color: #dcfcfa;\n } \n '
        }}
      />

      <nav
        className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ffae00" }}
      >
        <div className="container-fluid">
          <ul className = "navbar-nav">
            <li className = "nav-item">
              <a className = "nav-link p1" href="A1.html">My Portfolio</a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link p1" href="#">About Me</a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link p1" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row">
        <div className="col-sm-3" />

        <div className="col-sm-6 text-dark pt-3 pb-5">
          <div
            className="shadow container rounded-pill text-dark p1 pt-2 pb-2"
            style={{ backgroundColor: "#f7cb6d" }}
          >

            <div className="row">
              <div className="col-sm-1 text-dark p1" />
              <div
                className="col-sm-2 d-flex align-items-center"
                style={{ paddingLeft: 35 }}
              >
                <div>
                  <img
                    src={profileImg}
                    className="border border-dark"
                    height={350}
                    width={175}
                    alt="Photo of me"
                    rounded=""
                  />
                </div>
              </div>
              <div className="col-sm-8" style={{ paddingLeft: 80 }}>
                <h1 className="p1 text-dark">
                  Kenneth <ins>Michael</ins> Bly
                </h1>

                <p className="p1">
                  I am a student at the University of Ottawa studying Civil 
                  Engineering and Computing Technologies. I endeavour to complete my work and 
                  studies effectively, earnestly, and with professionalism. Regardless of if 
                  I'm working independently or in a group, it is important to me keep up my 
                  standard of work in all circumstances by maintaining good communication 
                  and quality work.
                </p>

                <p className="p1">
                  Currently I do not have much experience and that which I do have other than 
                  the creation of this portfolio was limited and five years ago in high school. 
                  Thus I don't really have much, though as this semester progresses I will have 
                  gained more experience through completing the projects listed in the future projects 
                  section. As I am currently taking a UI design course at UOttawa, where I will be 
                  learning about design elements. Below are some links to some of the course materials.
                </p>
                
                <p>
                <a href="https://uottawa.brightspace.com/d2l/le/content/592979/Home">
                  SEG 3125 Brightspace
                </a>
                ,<a href="https://www.nngroup.com/">NN/g Website</a>,
                <a href="https://www.w3schools.com/bootstrap5/index.php">
                W3 Schools Tutorials
                </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" />
        <div className="col-sm-2 text-light p1" />
        <div className="col-sm-2 text-dark p1">
          <h2 class="text-dark">Completed Projects</h2>

          <div className="row pt-3">
            <div className="card" style={{ backgroundColor: "#f7cb6d" }}>
              <div className="card-body">No completed projects to display.</div>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6 text-light p1">
          <div className="row">
            <h2 class="text-dark">Future Projects</h2>

            <div className="col-sm-3 text-dark pt-3 p1">
              <div className="card" style={{ backgroundColor: "#f7cb6d", height: 300 }}>
                <div className="card-body">
                  <img src={dentalImg} className="card-img-top" object-fit="cover" alt="Dental Office"/>
            
                  <h5 className="card-title">Dental Office Website</h5>
                  <h6 className="card-description mb-2 text-muted">
                    A simple dental office website built using HTML and CSS.
                  </h6>

                  <button type="button" className="btn mt-auto align-self-start" style={{ backgroundColor: "#ffae00" }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-3 text-dark pt-3 p1">
              <div className="card" style={{ backgroundColor: "#f7cb6d", height: 300 }}>
                <div className="card-body">
                  <img src={memoryImg} className="card-img-top" object-fit="cover" alt="Memory Game"/>
            
                  <h5 className="card-title">Memory Game</h5>
                  <h6 className="card-description mb-2 text-muted">
                    A simple memory game built using HTML, CSS, and JavaScript.
                  </h6>

                  <button type="button" className="btn mt-auto align-self-start" style={{ backgroundColor: "#ffae00" }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-3 text-dark pt-3 p1">
              <div className="card" style={{ backgroundColor: "#f7cb6d", height: 300 }}>
                <div className="card-body">
                  <img src={estoreImg} className="card-img-top" object-fit="cover" alt="Estore Website"/>
            
                  <h5 className="card-title">Estore Website</h5>
                  <h6 className="card-description mb-2 text-muted">
                    A simple estore website built using HTML, CSS, and JavaScript.
                  </h6>

                  <button type="button" className="btn mt-auto align-self-start" style={{ backgroundColor: "#ffae00" }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-3 text-dark pt-3 p1">
              <div className="card" style={{ backgroundColor: "#f7cb6d", height: 300 }}>
                <div className="card-body">
                  <img src={dashboardImg} className="card-img-top" object-fit="cover" alt="Interactive Dashboard"/>
            
                  <h5 className="card-title">Interactive Dashboard</h5>
                  <h6 className="card-description mb-2 text-muted">
                    A simple interactive dashboard built using HTML, CSS, and JavaScript.
                  </h6>

                  <button type="button" className="btn mt-auto align-self-start" style={{ backgroundColor: "#ffae00" }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1 text-dark p1" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
