"use client";

import { forwardRef } from "react";
import ReCAPTCHA, { type ReCAPTCHAProps } from "react-google-recaptcha";

// Thin forwardRef wrapper so the dynamic import in the modal can pass a ref through.
export const RecaptchaWidget = forwardRef<ReCAPTCHA, ReCAPTCHAProps>(
  (props, ref) => <ReCAPTCHA ref={ref} {...props} />,
);
RecaptchaWidget.displayName = "RecaptchaWidget";
