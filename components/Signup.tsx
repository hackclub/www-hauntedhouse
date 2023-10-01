import { useEffect, useState } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import useSound from "use-sound";

// import mwahaha from "../public/mwahaha.mp3";

export const Signup = () => {
  const minAge = 13;
  const maxAge = 18;
  const [age, setAge] = useState(minAge);
  const controls = useAnimation();
  const pageControls = useAnimation();
  const [showError, setShowError] = useState("");
  const [endPage, setEndPage] = useState(false);

  const [play] = useSound("/mwahaha.mp3");
  const handleAgeInput = (event) => {
    let inputValue = parseInt(event.target.value, 10);

    inputValue = Math.min(maxAge, Math.max(minAge, inputValue));

    if (!isNaN(inputValue) && inputValue >= minAge && inputValue <= maxAge) {
      setShowError("");

      setAge(inputValue);
    } else {
      setShowError(`Woah there, Haunted House is meant for high schoolers between 13
      and 17 years old. Contact hauntedhouse@hackclub.com if you think
      this is a mistake.`);
    }
  };

  const checkAge = (inputValue: number) => {
    return !isNaN(inputValue) && inputValue >= minAge && inputValue <= maxAge;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (event) => {
    const age = parseInt(event.target.age.value, 10);
    const name = event.target.name.value;
    const email = event.target.email.value;

    console.log(age, name, email);
    event.preventDefault();

    if (name && checkAge(age) && validateEmail(email)) {
      fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          age,
        }),
      });

      setEndPage(true);
      await play();
      event.target.reset();
    }

    if (!name || !validateEmail(email) || !age) {
      setShowError("");
      setShowError(
        "Hey! Looks like you haven't inputted everything in correctly. Try again, and the spirits may give you access to the Haunted House..."
      );
    }

    if (age >= 18 || age < 13) {
      setShowError("");

      setShowError(`Woah there, Haunted House is meant for high schoolers between 13
      and 17 years old. Contact hauntedhouse@hackclub.com if you think
      this is a mistake.`);
    }
  };

  useEffect(() => {
    if (showError !== "") {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }

    if (endPage) {
      pageControls.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      pageControls.start({ opacity: 0, transition: { duration: 1 } });
    }
  }, []);

  return (
    <>
      <div
        id="#page-mask"
        // animate={pageControls}
        style={{
          zIndex: 1000,
          opacity: endPage ? 1 : 0,
          pointerEvents: endPage ? "all" : "none",
        }}
        className="transition duration-700 bg-black fixed top-0 left-0 h-screen w-screen p-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl mb-3 text-accent-default text-center">
          Thank you for signing up to Haunted House
        </h1>
        <p className="text-beige text-lg mb-8">
          It's going to truly be a magical weekend, and we hope to see you
          there!
        </p>
        <button
          onClick={() => {
            setEndPage(false);
          }}
          className="rounded-md hover:cursor-pointer bg-accent-default px-6 py-2 text-beige"
        >
          Go back
        </button>
      </div>
      <form id="form" onSubmit={handleSubmit}>
        <div className="p-8 md:p-12 w-full z-[99]">
          <div className="max-w-xl mx-auto">
            <div className="mb-8">
              <span className="text-accent-default text-5xl md:text-6xl text-center">
                It's time to enter...
              </span>
            </div>
            <div className="space-y-5" id="signup">
              <div className="flex-col flex space-y-1">
                <label className="text-2xl font-black text-beige">Email</label>
                <input
                  type="email"
                  name="email"
                  className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                  placeholder="Ex: orpheus@hackclub.com"
                />
              </div>
              <div className="flex-col flex space-y-1">
                <label className="text-2xl font-black text-beige">Name</label>
                <input
                  type="text"
                  name="name"
                  className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                  placeholder="Ex: Orpheus Smith"
                />
              </div>

              <div className="flex-col flex space-y-1">
                <label className="text-2xl font-black text-beige">Age</label>
                <input
                  type="number"
                  className="text-xl px-4 py-2 bg-beige text-blackish placeholder-gray-500 tracking-wide border-2 rounded-lg border-accent-darker "
                  placeholder="Ex: 16"
                  // min={minAge}
                  name="age"
                  // max={maxAge}
                  onInput={handleAgeInput}
                  onChange={(e) => {
                    if (
                      parseInt(e.target.value) >= 18 ||
                      parseInt(e.target.value) < 13
                    ) {
                      setShowError("");
                    } else {
                      setShowError("");
                    }
                  }}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />

                <div
                  style={{
                    zIndex: 999,
                    opacity: showError !== "" ? 1 : 0,
                  }}
                  // animate={controls}
                  // className={`${
                  //   showError === "" ? "h-0" : "h-auto p-6"
                  // } ease-in-out duration-150 fixed max-w-xl shadow-2xl bottom-5 right-5 transition rounded-lg bg-accent-darker `}

                  className={`
                ${
                  showError === "" ? "p-6" : ""
                } p-6 fixed max-w-xl shadow-2xl top-5 lg:bottom-5 right-5  rounded-lg bg-accent-darker `}
                >
                  <p className="text-beige text-lg">{showError}</p>
                </div>
              </div>
              <input
                type="submit"
                value={"Sign Up"}
                className="text-xl hover:cursor-pointer border-accent-darker border-3 rounded-lg  bg-accent-default text-beige px-4 py-2 w-full hover:bg-beige hover:text-accent-default transition ease-in-out duration-150"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
