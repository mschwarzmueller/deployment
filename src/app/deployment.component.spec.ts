import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DeploymentAppComponent } from '../app/deployment.component';

beforeEachProviders(() => [DeploymentAppComponent]);

describe('App: Deployment', () => {
  it('should create the app',
      inject([DeploymentAppComponent], (app: DeploymentAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'deployment works!\'',
      inject([DeploymentAppComponent], (app: DeploymentAppComponent) => {
    expect(app.title).toEqual('deployment works!');
  }));
});
