import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class ToS extends Component {
  // render the ToS page (note a template was used to grab the necessary text)
  renderToS = () => {
    return (
      <>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Welcome to Hermit!</h2>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h4 className="description">
                These terms and conditions outline the rules and regulations for the use of Hermit's
                Website, located at hermitapp.me.
              </h4>
              <h4 className="description">
                By accessing this website we assume you accept these terms and conditions. Do not
                continue to use Hermit if you do not agree to take all of the terms and conditions
                stated on this page.
              </h4>
              <h4 className="description">
                The following terminology applies to these Terms and Conditions, Privacy Statement
                and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you,
                the person log on this website and compliant to the Company’s terms and conditions.
                "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
                "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the
                offer, acceptance and consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for the express purpose
                of meeting the Client’s needs in respect of provision of the Company’s stated
                services, in accordance with and subject to, prevailing law of Netherlands. Any use
                of the above terminology or other words in the singular, plural, capitalization
                and/or he/she or they, are taken as interchangeable and therefore as referring to
                same.
              </h4>
              <h4 className="title">Cookies</h4>
              <h4 className="description">
                We employ the use of cookies. By accessing Hermit, you agreed to use cookies in
                agreement with the Hermit's Privacy Policy.
              </h4>
              <h4 className="description">
                Most interactive websites use cookies to let us retrieve the user’s details for each
                visit. Cookies are used by our website to enable the functionality of certain areas
                to make it easier for people visiting our website. Some of our affiliate/advertising
                partners may also use cookies.
              </h4>
              <h4 className="title">License</h4>
              <h4 className="description">
                Unless otherwise stated, Hermit and/or its licensors own the intellectual property
                rights for all material on Hermit. All intellectual property rights are reserved.
                You may access this from Hermit for your own personal use subjected to restrictions
                set in these terms and conditions.
              </h4>
              <h4 className="title">You must not:</h4>
              <h4 className="description">
                Republish material from Hermit Sell, rent or sub-license material from Hermit
                Reproduce, duplicate or copy material from Hermit Redistribute content from Hermit
                This Agreement shall begin on the date hereof. Our Terms and Conditions were created
                with the help of the Terms And Conditions Generator and the Privacy Policy
                Generator.
              </h4>
              <h4 className="description">
                Parts of this website offer an opportunity for users to post and exchange opinions
                and information in certain areas of the website. Hermit does not filter, edit,
                publish or review Comments prior to their presence on the website. Comments do not
                reflect the views and opinions of Hermit,its agents and/or affiliates. Comments
                reflect the views and opinions of the person who post their views and opinions. To
                the extent permitted by applicable laws, Hermit shall not be liable for the Comments
                or for any liability, damages or expenses caused and/or suffered as a result of any
                use of and/or posting of and/or appearance of the Comments on this website.
              </h4>
              <h4 className="description">
                Hermit reserves the right to monitor all Comments and to remove any Comments which
                can be considered inappropriate, offensive or causes breach of these Terms and
                Conditions.
              </h4>
              <h4 className="title">You warrant and represent that:</h4>
              <h4 className="description">
                You are entitled to post the Comments on our website and have all necessary licenses
                and consents to do so;
              </h4>
              <h4 className="description">
                The Comments do not invade any intellectual property right, including without
                limitation copyright, patent or trademark of any third party;
              </h4>
              <h4 className="description">
                The Comments do not contain any defamatory, libelous, offensive, indecent or
                otherwise unlawful material which is an invasion of privacy
              </h4>
              <h4 className="description">
                The Comments will not be used to solicit or promote business or custom or present
                commercial activities or unlawful activity.
              </h4>
              <h4 className="description">
                You hereby grant Hermit a non-exclusive license to use, reproduce, edit and
                authorize others to use, reproduce and edit any of your Comments in any and all
                forms, formats or media.
              </h4>
              <h4 className="title">Removal of links from our website</h4>
              <h4 className="description">
                If you find any link on our Website that is offensive for any reason, you are free
                to contact and inform us any moment. We will consider requests to remove links but
                we are not obligated to or so or to respond to you directly.
              </h4>
              <h4 className="description">
                We do not ensure that the information on this website is correct, we do not warrant
                its completeness or accuracy; nor do we promise to ensure that the website remains
                available or that the material on the website is kept up to date.
              </h4>
              <h4 className="title">Disclaimer</h4>
              <h4 className="description">
                To the maximum extent permitted by applicable law, we exclude all representations,
                warranties and conditions relating to our website and the use of this website.
                Nothing in this disclaimer will:
              </h4>
              <h4 className="description">
                limit or exclude our or your liability for death or personal injury;
              </h4>
              <h4 className="description">
                limit or exclude our or your liability for fraud or fraudulent misrepresentation;
              </h4>
              <h4 className="description">
                limit any of our or your liabilities in any way that is not permitted under
                applicable law; or exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </h4>
              <h4 className="description">
                The limitations and prohibitions of liability set in this Section and elsewhere in
                this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all
                liabilities arising under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </h4>
              <h4 className="description">
                As long as the website and the information and services on the website are provided
                free of charge, we will not be liable for any loss or damage of any nature.
              </h4>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </>
    );
  };

  render() {
    return <>{this.renderToS()}</>;
  }
}

export default ToS;
