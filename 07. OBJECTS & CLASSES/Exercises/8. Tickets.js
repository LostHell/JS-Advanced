function tickets(tickets, criteria) {

    class Ticket {
        constructor(descriptor) {
            const [destination, price, status] = descriptor.split('|');
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const data = tickets.map(ticket => new Ticket(ticket)).sort((a, b) => {
        switch (criteria) {
            case 'destination':
                return (a.destination).localeCompare(b.destination);
            case 'price':
                return Number(a.price) > Number(b.price) ? 1 : Number(a.price) < Number(b.price) ? -1 : 0;
            case 'status':
                return (a.status).localeCompare(b.status);
        }
    });

    console.log(data);
}

// tickets(['Philadelphia|914.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'price'
// );

// tickets(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// );