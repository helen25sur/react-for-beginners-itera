import { FC } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

import "./Contacts.css";

type Props = {
  contacts: {
    "email": string,
    "telegram": string,
    "instagram": string,
    "linkedin": string
  }

}

const Contacts: FC<Props> = ({ contacts }: Props) => {
  return (
    <>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${contacts.email}`}>
            <FontAwesomeIcon fontSize={24} icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href={contacts.instagram}>
            <FontAwesomeIcon fontSize={24} icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href={contacts.linkedin}>
            <FontAwesomeIcon fontSize={24} icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href={contacts.telegram}>
            <FontAwesomeIcon fontSize={24} icon={faTelegram} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Contacts;
