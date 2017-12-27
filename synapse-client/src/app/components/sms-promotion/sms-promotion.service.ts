/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { ISmsPromotion } from './';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SMSPromotionService {
     // Resolve HTTP using the constructor
     constructor (private http: HttpClient) {}
     private smsPromotionEndpoint = 'api/sms-promotion'; 

    createPromoCode (body: Object): Observable<ISmsPromotion[]> {
        let bodyString = JSON.stringify(body); // Stringify payload 
        return this.http.post(this.smsPromotionEndpoint, body) as Observable<ISmsPromotion[]>
    }
}
