import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { CreateUserDto } from '../dtos/users.dto';
import validationMiddleware from '../middlewares/validation.middleware';
import validationJsonResponseMiddleware from '../middlewares/validationJsonResponse.middleware';

class UsersRoute implements Route {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/`, this.usersController.getUsers);
    this.router.get(`/:id`, this.usersController.getUserById);
    this.router.post(
      `/`,
      validationJsonResponseMiddleware(CreateUserDto),
      this.usersController.createUser,
    );
    this.router.put(
      `/:id`,
      validationMiddleware(CreateUserDto, true),
      this.usersController.updateUser,
    );
    this.router.delete(`/:id`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
