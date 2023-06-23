import "./LandPage.css";

function LandPage() {
  return (
    <div className="*">
      <div className="Navbar-1">
        <ul class="uk-subnav" uk-margin>
          {/* <li class="uk-active"><a href="#">Active</a></li> */}
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      <p uk-margin>
        <div className="Sign-in">
          <button class="uk-button uk-button-primary">Login</button>
        </div>
        <div className="Sign-up">
          <button class="uk-button uk-button-primary">Signup</button>
        </div>
      </p>
      <div className="Heading-1">
        <h1>
          Here's an example of<br></br>dummy text commonly
        </h1>
      </div>
      <div className="para-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          urna vel velit <br></br> laoreet, ac varius tortor consequat. Nulla
          facilisi. Morbi nec justo et mi maximus<br></br> convallis ac a ex.{" "}
        </p>
      </div>
      <div className="Buton-3">
        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
          Publish Your First Script
        </button>
      </div>
      <h1 className="Header-2">Benifits</h1>
      <div className="card-1">
        <div class="">
          <h3 class="uk-card-title"></h3>
          <div className="align-bw-cards">
            <p className="Benifts-para">
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam et erat vitae turpis suscipit convallis in ac augue. Sed id
              quam non neque consequat facilisis eu eget risus. Vestibulum et
              eros non augue interdum fringilla.
            </p>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
      <div className="card-3">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>

      {/* <div class="uk-background-muted uk-height-large">
    <div class="uk-card uk-card-default uk-card-body uk-text-center uk-position-z-index" uk-sticky="position: bottom; end: !.uk-height-large">Stick to the bottom</div>
</div> */}

      <div className="footer-section">
        <div class="uk-section uk-section-muted">
          <div class="uk-container">
            <h3>Section</h3>

            <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandPage;
