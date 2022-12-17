import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Languages_Array as Languages } from "../../../assets/homepage-products";
import "../../../css/language.css";
import { changeLanguage } from "../../redux/userSlice";
import store from "../../redux/store";

function Language() {
  // const lang_ref1 = useRef("1");
  // const lang_ref2 = useRef("2");
  // const lang_ref3 = useRef("3");
  // const lang_ref4 = useRef("4");
  // const lang_ref5 = useRef("5");
  // const lang_ref6 = useRef("6");
  // const lang_ref7 = useRef("7");
  // const lang_ref = [
  //   lang_ref1,
  //   lang_ref2,
  //   lang_ref3,
  //   lang_ref4,
  //   lang_ref5,
  //   lang_ref6,
  //   lang_ref7,
  // ];
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="languages">
      <p>
        Change Language
        <Link to="/" className="learn-more">
          Learn more
        </Link>
      </p>

      {Languages.map((lang) => (
        <div
          className="language-ind"
          key={lang.lang}
          onClick={handleLanguageChange}
          value={lang.lang}
        >
          <input id={lang.lang} type="radio" name="lang" value={lang.lang} />
          <p value={lang.lang}>
            <label htmlFor={lang.lang} value={lang.lang}>
              {lang.lang}-{lang.abrv}
            </label>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Language;

/* <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="English" ref={lang_ref} />
        <p>
          <label htmlFor="English">English - EN</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="Arabic" ref={lang_ref} />
        <p>
          <label htmlFor="Arabic">Arabic - AR</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="Deutsch" ref={lang_ref} />
        <p>
          <label htmlFor="Deutsch">Deutsch - DE</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="He" ref={lang_ref} />
        <p>
          <label htmlFor="He">He - HE</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="Ko" ref={lang_ref} />
        <p>
          <label htmlFor="Ko">Ko - KO</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="portugues" ref={lang_ref} />
        <p>
          <label htmlFor="portugues">portugues - PT</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="Zh" ref={lang_ref} />
        <p>
          <label htmlFor="Zh">Zh - ZH</label>
        </p>
      </div>
      <div className="language-ind" onClick={handleLanguageChange}>
        <input type="radio" name="lang" value="Zh2" ref={lang_ref} />
        <p>
          <label htmlFor="Zh2">Zh2 - ZH2</label>
        </p>
      </div> */
