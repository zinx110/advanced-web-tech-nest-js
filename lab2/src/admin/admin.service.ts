import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getHello(): object {
    return { message: 'hello admin get' };
  }

  postHello(): object {
    return { message: 'hello admin post' };
  }

  getUserById(id: string): object {
    return { message: `user by id ${id}` };
  }

  getUserByQuery(query: object): object {
    return query;
  }

  postUserByBody(body: object): object {
    return { ...body, message: 'Post' };
  }

  putUserByBody(body: object): object {
    return { ...body, message: 'Put' };
  }

  patchUserByBody(body: object): object {
    return { ...body, message: 'Patch' };
  }

  deleteUserByBody(body: object): object {
    return { ...body, message: 'Delete' };
  }

  updateUser(id: string, body: object): object {
    return { id: id, ...body, message: 'Post with query and ' };
  }
}
