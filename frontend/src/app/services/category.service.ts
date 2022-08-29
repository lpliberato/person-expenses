import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${environment.api}/categoria`);
    }

    getCategory(id: string): Observable<Category> {
        return this.http.get<Category>(`${environment.api}/categoria/${id}`);
    }

    createCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(`${environment.api}/categoria`, category);
    }

    deleteCategory(id: string): Observable<Category> {
        return this.http.delete<Category>(`${environment.api}/categoria/${id}`);
    }    
}