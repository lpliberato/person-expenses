import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Launch } from '../models/launch.model';

@Injectable({
    providedIn: 'root',
})
export class LaunchService {

    constructor(private http: HttpClient) { }

    getLaunches(): Observable<Launch[]> {
        return this.http.get<Launch[]>(`${environment.api}/lancamento`);
    }

    getLaunch(id: string): Observable<Launch> {
        return this.http.get<Launch>(`${environment.api}/lancamento/${id}`);
    }

    createLaunch(category: Launch): Observable<Launch> {
        return this.http.post<Launch>(`${environment.api}/lancamento`, category);
    }

    deleteLaunch(id: string): Observable<Launch> {
        return this.http.delete<Launch>(`${environment.api}/lancamento/${id}`);
    }      
}