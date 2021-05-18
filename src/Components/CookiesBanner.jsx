import { CheckIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from "../redux/store";
import changeLanguage from "../redux/languageContent";

const mapDispatchToProps = (dispatch) => ({
  setCookiesAuth: (cookiesAuth) =>
    dispatch({ type: "SET_COOKIESAUTH", cookiesAuth }),
  setCookieInfoWindow: (popupOpen) =>
    dispatch({ type: "SET_POPUP", popupOpen }),
});

const mapStateToProps = (state) => {
  return { cookiesAuth: state.cookiesAuth, popupOpen: state.popupOpen };
};

function CookiesBanner(props) {
  const [open, setOpen] = useState(true);
  // eslint-disable-next-line
  const [content, setContent] = useState(null);

  useEffect(() => {
    store.subscribe(() => {
      store.getState();
      setContent(changeLanguage());
    }, []);
  });

  useEffect(() => {
    if (Boolean(store.getState().cookiesAuth.cookiesAuth) === true) {
      setOpen(false);
    }
  }, [open]);

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(false);
    props.setCookiesAuth(true);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    props.setCookieInfoWindow(true);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-0 z-10 inset-x-0 bg-opacity-20 bg-gray-800">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-sm text-white">
                <span className="md:hidden">
                  {changeLanguage().cookieBanner.alertShort}
                </span>
                <span className="hidden md:inline">
                  {changeLanguage().cookieBanner.alert}
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <button
                    onClick={handleLinkClick}
                    className="text-white font-bold underline"
                  >
                    {changeLanguage().cookieBanner.linkText}
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                onClick={handleClick}
                className="flex p-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesBanner);
