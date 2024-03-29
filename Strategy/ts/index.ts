interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Conecting....');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin', 'entra');
