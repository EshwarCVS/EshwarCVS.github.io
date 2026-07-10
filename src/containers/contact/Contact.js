import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import {useSiteData} from "../../contexts/SiteDataContext";

export default function Contact() {
  const {data} = useSiteData();
  const avatarUrl =
    data?.profile?.avatar_url ||
    "https://avatars.githubusercontent.com/u/28903840?v=4";
  const name =
    data?.profile?.full_name ||
    data?.profile?.name ||
    "Eshwar Chandra Vidhyasagar Thedla";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="dark-mode contact-subtitle">{contactInfo.subtitle}</p>
            <div className="dark-mode contact-text-div">
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              className="contact-avatar"
              alt={name}
              src={avatarUrl}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
