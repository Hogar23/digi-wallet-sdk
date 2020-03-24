export default class CheckResponse {
  constructor(values = null) {
    this.status = null;
    this.error = null;

    for (const [key, value] of Object.entries(values)) {
      switch (key) {
        case 'status':
          this.status = value;
          break;
        case 'error':
          this.error = value;
          break;
      }
    }
  }
}
