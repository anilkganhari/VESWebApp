export enum VisitorTypeEnum {
  CLIENT = 1,
  FRIEND = 2,
  FAMILY = 3,
  PERSONALSTAFF = 4
}

export enum ClientTypeEnum {
  INDIAN = 1,
  FOREGIN = 2
}

export class NewRegistration {
  VistingIn30Days: boolean;
  VisitorType: VisitorTypeEnum;
  ClientType: ClientTypeEnum;
  Name: string;
  LastName: string;
  Organisation: string;
  Nationality: string;
  VisitDate: Date;
  EndDate: Date;
}


