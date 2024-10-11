// Define an interface for TableRenderer
interface ITableRenderer {
    renderTable(data: Student[]): HTMLTableElement;
}

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Class responsible for creating the table headers
class TableHeader {
    private headers: string[];

    constructor(headers: string[]) {
        this.headers = headers;
    }

    public createHeaderRow(): HTMLTableSectionElement {
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        this.headers.forEach((header) => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        return thead;
    }
}

// Class responsible for rendering student rows in the table
class StudentTableBody {
    public createTableBody(data: Student[]): HTMLTableSectionElement {
        const tbody = document.createElement('tbody');

        data.forEach((student) => {
            const row = tbody.insertRow();
            const firstNameCell = row.insertCell(0);
            const locationCell = row.insertCell(1);

            firstNameCell.textContent = student.firstName;
            locationCell.textContent = student.location;
        });

        return tbody;
    }
}

// TableRenderer class following OOP and SOLID principles
class StudentTableRenderer implements ITableRenderer {
    private header: TableHeader;
    private body: StudentTableBody;

    constructor(header: TableHeader, body: StudentTableBody) {
        this.header = header;
        this.body = body;
    }

    // Render the complete table
    public renderTable(data: Student[]): HTMLTableElement {
        const table = document.createElement('table');
        const thead = this.header.createHeaderRow();
        const tbody = this.body.createTableBody(data);

        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
    }
}

// Main Application class to control the rendering and data
class App {
    private renderer: ITableRenderer;
    private readonly data: Student[];

    constructor(renderer: ITableRenderer, data: Student[]) {
        this.renderer = renderer;
        this.data = data;
    }

    // Method to initialize and render the table
    public init(): void {
        const table = this.renderer.renderTable(this.data);
        const body = document.querySelector('body')!;
        body.appendChild(table);
    }
}

// Sample student data
const studentsList: Student[] = [
    { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' },
    { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' },
];

// Table headers
const headers = ['First Name', 'Location'];

// Instantiate the necessary classes and initiate the app
const tableHeader = new TableHeader(headers);
const studentTableBody = new StudentTableBody();
const studentTableRenderer = new StudentTableRenderer(tableHeader, studentTableBody);

const app = new App(studentTableRenderer, studentsList);
app.init();
