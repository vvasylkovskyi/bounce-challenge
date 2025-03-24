"use client";

import {
  GenericButtonWeb,
  GenericButtonWrapperWeb,
  MainContainerSuccessWeb,
  SuccessContainerTitleWrapperWeb,
  SuccessSubtitleWeb,
  SuccessTitleWeb,
} from "@packages/ui-components-web";

import { useRouter } from "next/navigation";
import "./success.scss";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <MainContainerSuccessWeb style={{ height: "100%" }}>
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
      <SuccessContainerTitleWrapperWeb>
        <SuccessTitleWeb style={{ textAlign: "center" }}>
          Success! Your Booking Has Been Successfully Placed
        </SuccessTitleWeb>
        <SuccessSubtitleWeb style={{ marginTop: 8, textAlign: "center" }}>
          You can return to the homepage and start again anytime.
        </SuccessSubtitleWeb>
        <GenericButtonWrapperWeb
          style={{ marginTop: 16 }}
          onClick={() => router.back()}
          isDisabled={false}
        >
          <GenericButtonWeb>Return to Homepage</GenericButtonWeb>
        </GenericButtonWrapperWeb>
      </SuccessContainerTitleWrapperWeb>
    </MainContainerSuccessWeb>
  );
}
