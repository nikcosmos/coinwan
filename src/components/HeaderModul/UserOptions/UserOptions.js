import React, { useContext, useEffect, useState } from 'react';
import { OptionsContext } from '../../../App';
import CurrencyList from '../CurrencyList/CurrencyList';
import LanguageList from '../LanguageList/LanguageList';
import './UserOptions.scss';
function UserOptions() {
   const { options} = useContext(OptionsContext);

   const [curLang, setCurLang] = useState({ languageNamed: 'English', langISO: 'en' });

   useEffect(() => {
      // header settings change
      const lang = document.querySelectorAll('.website-settings-lang');
      const currency = document.querySelectorAll('.website-settings-currency');
      lang.forEach(function (el) {
         el.addEventListener('click', function () {
            document.querySelector('.website-language').textContent = el.textContent;
         });
      });
      currency.forEach(function (el) {
         el.addEventListener('click', function () {
            document.querySelector('.website-currency').textContent = el.textContent;
         });
      });
      // choice on mobile
      document.querySelector('.website-language').addEventListener('click', function () {
         document.querySelector('.website-settings-choice').classList.add('lang-is-open');
         document.querySelector('.website-settings-choice').classList.remove('currency-is-open');
      });
      document.querySelector('.website-currency').addEventListener('click', function () {
         document.querySelector('.website-settings-choice').classList.add('currency-is-open');
         document.querySelector('.website-settings-choice').classList.remove('lang-is-open');
      });
      document.querySelector('.website-settings-close').addEventListener('click', function () {
         document.querySelector('.website-settings-choice').classList.remove('lang-is-open');
         document.querySelector('.website-settings-choice').classList.remove('currency-is-open');
      });
   }, []);

   return (
      <li className="nav-list-item website-settings-select">
         <button className="UserOptionsButton">
            <span className="website-language">{curLang.languageNamed}</span> <span className="text-lightgrey">/</span>{' '}
            <span className="text-lightgrey website-currency">{options.currency}</span>
         </button>
         <form action="" className="website-settings-choice">
            <span className="website-settings-close"></span>
            <div className="website-settings-col">
               <span className="website-settings-heading">Language</span>
               <LanguageList curLang={curLang} setCurLang={setCurLang} />
            </div>
            <div className="website-settings-col">
               <span className="website-settings-heading">Currency</span>
               <ul className="website-settings-list">
                  <CurrencyList />
               </ul>
            </div>
         </form>
      </li>
   );
}

export default UserOptions;
