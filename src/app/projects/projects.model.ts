export class Project {
  title: string;
  description: string;
  tech: string[];
  sourceCodes: ExternalButton[];
  liveDemo?: ExternalButton;

  constructor(title: string, description: string, tech: string[], sourceCodes: ExternalButton[], liveDemo?: ExternalButton) {
    this.title = title;
    this.description = description;
    this.tech = tech;
    this.sourceCodes = sourceCodes;
    this.liveDemo = liveDemo
  }

}

export class ExternalButton {
  value: string;
  url: string;

  constructor(value: string, url: string) {
    this.value = value;
    this.url = url;
  }

}
