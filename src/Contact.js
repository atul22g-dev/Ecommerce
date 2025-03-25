import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

// Move the styled component outside of the functional component
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  document.title = "Ecommerce | Contact";
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879.330266194964!2d76.9284153226026!3d30.445593426422867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fba3a37b0a617%3A0x93d31319ded886bb!2sJatwar%2C%20Haryana%20134201!5e0!3m2!1sen!2sin!4v1669101775687!5m2!1sen!2sin"
        width="100%"
        height="400"
        title="map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : "anonymous"}
              required
              readOnly
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={isAuthenticated ? user.email : "anonymous@anonymous.com"}
              autoComplete="off"
              readOnly
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              aria-label="Message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;