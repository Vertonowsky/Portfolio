export class Job {
  title: string;
  description: string;
  steps: string[];
  imageUrl: string;
  date: string;
  company: string;
  position: string;

  constructor(title: string, description: string, steps: string[], imageUrl: string, date: string, company: string, position: string) {
    this.title = title;
    this.description = description;
    this.steps = steps;
    this.imageUrl = imageUrl;
    this.date = date;
    this.company = company;
    this.position = position;
  }

}
