import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, GraduationCap, Heart, Stethoscope, FlaskConical, Building2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CareersPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const isFr = language === 'fr';

  const txt = (en: string, ar: string, fr: string) => isAr ? ar : isFr ? fr : en;

  const departments = [
    { icon: Stethoscope, name: txt('Medical & Clinical', 'الطبي والسريري', 'Médical & Clinique') },
    { icon: Heart, name: txt('Nursing', 'التمريض', 'Soins infirmiers') },
    { icon: FlaskConical, name: txt('Research & Innovation', 'البحث والابتكار', 'Recherche & Innovation') },
    { icon: Building2, name: txt('Administrative', 'الإداري', 'Administratif') },
    { icon: GraduationCap, name: txt('Education & Training', 'التعليم والتدريب', 'Éducation & Formation') },
    { icon: Users, name: txt('Support Services', 'خدمات الدعم', 'Services de soutien') },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-background">

      <main>
        <section className="page-hero">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              {txt('Join Our Team', 'انضم إلى فريقنا', 'Rejoignez notre équipe')}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4">
              {txt('Careers at CapitalMed', 'الوظائف في كابيتال ميد', 'Carrières à CapitalMed')}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90 max-w-2xl mx-auto">
              {txt(
                'Be part of the largest medical city in Africa and the Middle East',
                'كن جزءاً من أكبر مدينة طبية في أفريقيا والشرق الأوسط',
                'Faites partie de la plus grande cité médicale d\'Afrique et du Moyen-Orient'
              )}
            </motion.p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {txt('Positions Coming Soon', 'الوظائف قريباً', 'Postes à venir bientôt')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {txt(
                  'We are building a world-class team of over 15,000 healthcare professionals. Job openings will be announced soon across all departments. Register your interest now to be among the first to know.',
                  'نحن نبني فريقاً عالمي المستوى يضم أكثر من 15,000 من المتخصصين في الرعاية الصحية. سيتم الإعلان عن الوظائف المتاحة قريباً في جميع الأقسام. سجّل اهتمامك الآن لتكون من أوائل من يعلم.',
                  'Nous constituons une équipe de classe mondiale de plus de 15 000 professionnels de la santé. Les offres d\'emploi seront bientôt annoncées dans tous les départements. Inscrivez votre intérêt maintenant pour être parmi les premiers informés.'
                )}
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-[8px] bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Send className="w-4 h-4" />
                  {txt('Register Your Interest', 'سجّل اهتمامك', 'Enregistrez votre intérêt')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Departments We're Hiring For */}
        <section className="py-14 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">
                {txt('Departments', 'الأقسام', 'Départements')}
              </h2>
              <p className="text-muted-foreground">
                {txt(
                  'We will be hiring across the following departments',
                  'سنوظف في الأقسام التالية',
                  'Nous recruterons dans les départements suivants'
                )}
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {departments.map((dept, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="premium-card p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <dept.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{dept.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-14">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">
                {txt('Why Join CapitalMed?', 'لماذا كابيتال ميد؟', 'Pourquoi rejoindre CapitalMed ?')}
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: txt('World-Class Facilities', 'مرافق عالمية المستوى', 'Installations de classe mondiale'),
                  desc: txt('Work in state-of-the-art facilities across 19 healthcare buildings on a 577,000 sq.m campus.', 'اعمل في مرافق حديثة عبر 19 مبنى صحياً على مساحة 577,000 م².', 'Travaillez dans des installations ultramodernes réparties sur 19 bâtiments de santé sur un campus de 577 000 m².')
                },
                {
                  title: txt('Career Growth', 'النمو الوظيفي', 'Évolution de carrière'),
                  desc: txt('Access continuous education, research opportunities, and professional development programs.', 'استفد من التعليم المستمر وفرص البحث وبرامج التطوير المهني.', 'Accédez à la formation continue, aux opportunités de recherche et aux programmes de développement professionnel.')
                },
                {
                  title: txt('Impactful Work', 'عمل مؤثر', 'Un travail qui compte'),
                  desc: txt('Serve over 5 million patients annually and contribute to transforming healthcare in the region.', 'اخدم أكثر من 5 ملايين مريض سنوياً وساهم في تحويل الرعاية الصحية في المنطقة.', 'Servez plus de 5 millions de patients par an et contribuez à transformer les soins de santé dans la région.')
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="premium-card p-6 text-center">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </motion.div>
  );
};

export default CareersPage;
