import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/:id')
  getHello(@Param() param: object): object {
    console.log(param);
    return this.adminService.getHello();
  }

  @Post()
  postAdmin(): object {
    return this.adminService.postHello();
  }

  @Get('/user/:id')
  getUserById(@Param('id') id: any): object {
    console.log(id);

    return this.adminService.getUserById(id);
  }

  @Get('/user')
  getUserByQuery(@Query() query: object): object {
    console.log('query', query);
    return query;
    //return this.adminService.getUserByQuery(query);
  }

  @Post('/user')
  postUserByBody(@Body() body: object): object {
    console.log(body);
    return this.adminService.postUserByBody(body);
  }

  @Put('/user')
  putUserByBody(@Body() body: object): object {
    return this.adminService.putUserByBody(body);
  }

  @Patch('/user')
  patchUserByBody(@Body() body: object): object {
    return this.adminService.patchUserByBody(body);
  }

  @Delete('/user')
  deleteUserByBody(@Body() body: object): object {
    return this.adminService.deleteUserByBody(body);
  }

  @Put('/updateUser/:id')
  updateUser(@Param('id') id: string, @Body() body: object): object {
    return this.adminService.updateUser(id, body);
  }

  @Post('/practice/:id')
  roman(@Param() param: any, @Query() query: object, @Body() body: object) {
    console.log('param  ===', param);
    console.log('query  ===', query);
    console.log('body  ===', body);

    return body;
  }
}
