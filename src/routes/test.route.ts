import { Router } from "express";
import TestController from "../controllers/test.controller";

class TestRoute implements Route {
  public path = "/test";
  public router = Router();
  public testController = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/das", this.testController.test);
  }
}

export default TestRoute;
