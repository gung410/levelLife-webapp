import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const originalUrl = req.url;

    // Thay đổi port từ 4200 sang 5000
    const updatedUrl = originalUrl.replace(':4200', ':5000');

    // Tạo một yêu cầu mới với URL cập nhật
    const updatedRequest = req.clone({ url: updatedUrl });

    // Chuyển tiếp yêu cầu cập nhật
    return next.handle(updatedRequest);
  }

}
