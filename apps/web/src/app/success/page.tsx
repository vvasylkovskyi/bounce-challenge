import Link from "next/link";
import "./success.scss";

export default function SuccessPage() {
  return (
    <div className="main-container__inner-wrapper success-container">
      <div className="checkmark-container">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle className="checkmark-circle" cx="26" cy="26" r="25" />
          <path className="checkmark-check" fill="none" d="M16 26l6 6 14-14" />
        </svg>
      </div>
      <div className="success-container__title-wrapper main-container__title-wrapper">
        <h1 className="text-xl font-bold">
          Success! Your Booking Has Been Successfully Placed
        </h1>
        <h2 className="text-md mt-4">
          You can return to the homepage and start again anytime.
        </h2>
        <Link href="/" className="mt-4">
          <button className="generic-button">Return to Homepage</button>
        </Link>
      </div>
    </div>
  );
}
