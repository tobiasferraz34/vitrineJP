import {
  Navbar,
  NavItem,
  Icon,
} from 'react-materialize';

import Logo from './imagens/vitrine.png';


function App() {
  return (
    <div className="container-fluid">
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo " href="#" style={{fontWeight: 'bold'}}>
            Vitrine JP    
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        style={{backgroundColor:'#F5C92F'}}
      >
        <NavItem href="get-started.html">
          Entrar
          <Icon left>search</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          Cadastrar
          <Icon right>view_module</Icon>
        </NavItem>
      </Navbar>
     
      <img style={{width: '100%'}} src={Logo}/>
     
      
      
      <div className="container">
        <h3 style={{color:'#F5C92F'}}>Principais parceiros</h3>
        <div class="row" style={{ marginTop: '30px' }}>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively tetste.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="images/sample-1.jpg" />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="page-footer" style={{backgroundColor:'#F5C92F'}}>
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Vitrine JP</h5>
              <p class="grey-text text-lighten-4">
                Aqui na vitrine sua loja fica online.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
