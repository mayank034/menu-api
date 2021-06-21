// src/common/http-exception.ts

export default class HttpException extends Error {
    statusCode?: number;        //statusCode?: number; means statusCode can be left undefined. It is optional to define it.
    status?: number;            //status?: number; means status can be left undefined. It is optional to define it.
    message: string;            
    error: string | null;       
  
    constructor(statusCode: number, message: string, error?: string) {
      super(message);
  
      this.statusCode = statusCode;
      this.message = message;
      this.error = error || null;
    }
  }