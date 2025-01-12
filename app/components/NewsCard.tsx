export default function NewsCard({
    time = '',
    title = 'title',
    description = 'desc',
    imgUrl = 'imgUrl',
}: Readonly<{ time: string; title: string; description: string; imgUrl: string }>) {
    const readableDate = new Date(time).toLocaleString('en-US', {
        weekday: 'long', // e.g., 'Sunday'
        year: 'numeric', // e.g., '2025'
        month: 'long', // e.g., 'January'
        day: 'numeric', // e.g., '12'
        hour: '2-digit', // e.g., '03 PM'
        minute: '2-digit', // e.g., '45'
        second: '2-digit', // e.g., '30'
        hour12: true, // Display time in 12-hour format (set to false for 24-hour)
    });
    return (
        <article className="flex flex-row w-full h-auto bg-[#f7f7f7] rounded-lg shadow-md p-4">
            <div className="flex flex-col gap-3">
                <span className="text-md font-medium">{readableDate}</span>
                {imgUrl?.length > 0 ? <img src={imgUrl} alt="news" className="rounded-md" /> : null}
                <span className="text-xl font-bold">{title}</span>
                <p className="text-sm">{description}</p>
            </div>
        </article>
    );
}
