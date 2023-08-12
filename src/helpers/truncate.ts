const Truncate = (str: string, max: number = 40) => {
    return str.length > 100 && str.slice(0, max) + '...';
}

export default Truncate;