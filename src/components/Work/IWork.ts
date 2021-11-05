
interface IWork {
    id: number;
    company: string;
    description: string;
    from: string;
    to: string;
    isCurrentJob?: boolean;
}

export default IWork;