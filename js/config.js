export const nameRegex =
  /^(?!.*\s{2,})[A-Za-z0-9]{3,12}(?: [A-Za-z0-9]{3,12})*(?: )?$/;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordRegex =
  /^(?=.*[!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_+\-=\\[\]\/]{6,32}$/;
