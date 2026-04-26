/*
 * BACKEND TODO — wire up Supabase before public launch
 *
 * 1. Add @supabase/supabase-js to package.json
 * 2. Create src/lib/supabase.ts with createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
 * 3. Run this SQL in Supabase SQL Editor:
 *      create table public.waitlist (
 *        id uuid primary key default gen_random_uuid(),
 *        email text not null unique,
 *        created_at timestamptz not null default now()
 *      );
 *      alter table public.waitlist enable row level security;
 *      create policy "anon can insert" on public.waitlist
 *        for insert to anon with check (true);
 *      create or replace function public.get_waitlist_count()
 *        returns integer language sql security definer
 *        set search_path = public as $$
 *          select count(*)::integer from public.waitlist;
 *        $$;
 *      grant execute on function public.get_waitlist_count() to anon;
 * 4. Replace the simulated submit() below with:
 *      const { error } = await supabase.from('waitlist').insert({ email });
 *      if (error?.code === '23505') setStatus('success'); // duplicate = treat as success
 *      else if (error) setStatus('error');
 *      else setStatus('success');
 * 5. Replace the hardcoded count with:
 *      supabase.rpc('get_waitlist_count').then(({ data }) => setCount(data));
 */

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

type Status = 'idle' | 'loading' | 'success' | 'error';

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    const cleaned = email.trim().toLowerCase();
    if (!isValidEmail(cleaned)) {
      setStatus('error');
      setErrorMessage("That email doesn't look right.");
      return;
    }
    setStatus('loading');
    setErrorMessage('');
    console.log('[Waitlist] Submitted email:', cleaned);
    setTimeout(() => setStatus('success'), 600);
  };

  return (
    <section id="waitlist" className="bg-gray-900 text-white py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Join the waitlist</Eyebrow>
          <h2
            style={{ fontFamily: 'Ciscela, serif' }}
            className="text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            Starting in Lagos. The rest of Nigeria next. Africa on the horizon.
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-10">
            We'll email you the moment the Lagos beta opens.
          </p>

          {status === 'success' ? (
            <p
              className="text-lg text-white border border-gray-700 bg-gray-800 px-6 py-5 max-w-xl mx-auto"
              role="status"
            >
              You're in. We'll email you the moment the Lagos beta opens.
            </p>
          ) : (
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  className="flex-1 rounded-full bg-white text-gray-900 placeholder:text-gray-400 px-6 py-4 outline-none border border-transparent focus:border-primary"
                />
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === 'loading'}
                  className="rounded-full bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Notify me'}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-3 text-left">
                  {errorMessage}
                </p>
              )}
            </div>
          )}

          {/* TODO: Replace em dash with live count from supabase.rpc('get_waitlist_count') */}
          <p className="text-sm text-gray-400 mt-10">
            — Nigerians already on the waitlist.
          </p>
        </div>
      </Container>
    </section>
  );
}
