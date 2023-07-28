import { Body, Controller, Get, HttpCode, Inject, Param, Post, Request, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request as Req } from "express";
import { AuthUseCaseModule } from "src/use-cases/auth-usecases/auth.usecases-proxy";
import { AuthUseCase } from "src/use-cases/auth-usecases/usecase-blocks/auth.usecase";
import { EmploeeLoginDto } from "./dto/emploee.login.dto";
import { BodyCanActivate, EmploeeRegisterDto } from "./dto/emploee.register.dto";
import { AuthGuard } from "src/infrastructure/common/guards/auth.guard";
import { JobTitleGuard } from "src/infrastructure/common/guards/jobTitle.guard";
import { CreatePasswordDto } from "./dto/createPassword.dto";

@Controller("/auth")
export class AuthController {
  constructor(
    @Inject(AuthUseCaseModule.AUTHORIZATION)
    private readonly AuthorizationUseCaseInstanse: AuthUseCase
  ) { };

  @Post('/emploee/register')
  @HttpCode(200)
  @UseGuards(JobTitleGuard)
  public async adminRegister(@Body(new ValidationPipe({whitelist: true})) dto: EmploeeRegisterDto, @Request() req: Req) {
    const { link } = await this.AuthorizationUseCaseInstanse.registerEmploee(dto);
    return link;
  };

  @Post('/login')
  @HttpCode(200)
  public async login(@Body() dto: EmploeeLoginDto, @Request() req: Req) {
    const { user, header, access } = await this.AuthorizationUseCaseInstanse.login(dto);
    req.res.setHeader('Set-Cookie', header)
    return { user, access };
  };

  @Get('/refresh')
  @HttpCode(200)
  public async refresh(@Request() req: Req) {
    const { access, header, user } = await this.AuthorizationUseCaseInstanse.refresh(req.cookies["Refresh"]);
    req.res.setHeader("Set-Cookie", header);
    return { access, user };
  };

  @Post('/logout')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  public async logout(@Body() dto: BodyCanActivate){
    return await this.AuthorizationUseCaseInstanse.logout(dto._id);
  };

  @Post('/check:linkId')
  @HttpCode(200)
  public async validateLink(@Param() dto: {linkId: string}){
    return await this.AuthorizationUseCaseInstanse.validateLink(dto.linkId.toString());
  }

  @Post('/password/create')
  @HttpCode(200)
  public async createPassword(@Body() dto: CreatePasswordDto, @Request() req: Req){
    const {header, user, access} = await this.AuthorizationUseCaseInstanse.createPassword(dto);
    req.res.setHeader("Set-Cookie", header);
    return {user, access};
  }
}
