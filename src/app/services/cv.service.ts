import { Injectable, signal } from '@angular/core';
import { cvProfile, type PortfolioProfile } from '../data/cv-data';

@Injectable({
    providedIn: 'root',
})
export class CvService {
    readonly profile = signal<PortfolioProfile>(cvProfile);
}
