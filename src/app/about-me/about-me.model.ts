export class Technology {
  value: string;
  imageUrl: string;

  constructor(value: string, imageUrl: string) {
    this.value = value;
    this.imageUrl = imageUrl;
  }
}

export class Hobby {
  value: string;
  imageUrl: string;

  constructor(value: string, imageUrl: string) {
    this.value = value;
    this.imageUrl = imageUrl;
  }
}

export class University {
  title: string;
  description: string;
  imageUrl: string;
  customBackground: boolean;


  constructor(title: string, description: string, imageUrl: string, customBackground: boolean) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.customBackground = customBackground;
  }
}
