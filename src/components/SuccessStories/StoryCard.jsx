import { Star, Quote } from "lucide-react";

export default function StoryCard({ story }) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="rounded-3xl bg-white p-8 mb-8 shadow-xl border border-slate-100">
        <Quote className="text-emerald-500 mb-6" size={40} />

        <p className="leading-8 text-slate-600">"{story.story}"</p>

        <div className="flex mt-6 gap-1">
          {[...Array(story.rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <img
            src={story.image}
            alt={story.name}
            className="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h3 className="font-bold text-lg">{story.name}</h3>

            <p className="text-slate-500">{story.role}</p>

            <span className="text-emerald-600 font-semibold">
              {story.company}
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-emerald-50 p-4">
          <p className="text-sm text-slate-500">Total Earnings</p>

          <h3 className="text-3xl font-bold text-emerald-600">
            {story.earnings}
          </h3>
        </div>
      </div>
    </div>
  );
}
