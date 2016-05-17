import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {AuthProviderService} from './auth-provider.service';

describe('AuthProvider Service', () => {
  beforeEachProviders(() => [AuthProviderService]);

  it('should ...', inject([AuthProviderService], (service: AuthProviderService) => {
       expect(service).toBeTruthy();
     }));
});
