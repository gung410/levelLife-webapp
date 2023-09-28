export class UserLoginInfoDto{
  Code!: string;
  UserName!: string;
  PassWord!: string;
  NewPassword!: string;
  PassReissueKey!: string | undefined;
}
