import { Users, Calendar, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Students',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Calendar,
    value: '20+',
    label: 'Events Organized',
    gradient: 'from-cyan-600 to-teal-600'
  },
  {
    icon: Building2,
    value: '50+',
    label: 'Campus Partners',
    gradient: 'from-teal-600 to-blue-600'
  },
  {
    icon: Award,
    value: '100+',
    label: 'Core Members',
    gradient: 'from-slate-600 to-cyan-600'
  }
];

export default function Stats() {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}