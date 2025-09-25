import { Router } from "express";

declare global {
  interface Route {
    path: string;
    router: Router;
  }

  interface User {
    _id: string;
    email: string;
    password: string;
  }
}

export {};