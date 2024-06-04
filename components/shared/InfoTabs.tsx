import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Badge} from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { InfoTabsProps } from '@/index'


const InfoTabs = ({info}: InfoTabsProps) => {
  return (
    <Tabs defaultValue="description" >
                <TabsList className='pl-0 md:pl-1'>
                  <TabsTrigger 
                    className='pl-0 '
                    value="description">Descripcion
                  </TabsTrigger>
                  <TabsTrigger  value="links">Links</TabsTrigger>
                  <TabsTrigger  value="finance">Financiamiento</TabsTrigger>
                  <TabsTrigger  value="analyzis">Analisis</TabsTrigger>
                  
                </TabsList>
                <div className='border-t border-grey-light'></div>
                <TabsContent className="min-h-[250px]" value="description">
                  <h2 className='text-xl md:text-2xl font-bold mb-3'>Descripcion</h2>
                  <div 
                    className='border rounded-sm p-2
                     bg-primary-foreground/80 text-dark-grey
                     w-[96%] mx-auto '>
                    <p>
                     {info.descripcion}
                    </p>
                  </div>
                </TabsContent>
                <TabsContent className="min-h-[250px]" value="links">
                <h2 className='text-xl md:text-2xl font-bold mb-3'>Links</h2>

                <div className='flex items-center justify-center'>
                  <ul className='grid gap-3 grid-cols-4'>

                    {info.twitter &&
                      
                      (  <Link 
                        target='_blank'
                        href={info.twitter}>
                          <li>
                            <Image
                                    src='/twitter-x-fill.svg'
                                    alt='Home'
                                    height={20}
                                    width={20}
                                />  
                          </li>                            
                        </Link>
                      )
                    }
                    {
                      info.discord  && (  
                      <Link 
                        target='_blank'
                        href={info.discord}>
                      <li>
                        <Image
                                src='/discord-fill.svg'
                                alt='Home'
                                height={20}
                                width={20}
                            />  
                      </li>                            
                    </Link>
                  )}
                  {
                      info.github  && (  
                      <Link 
                        target='_blank'
                        href={info.github}>
                      <li>
                        <Image
                                src='/github-fill.svg'
                                alt='Home'
                                height={20}
                                width={20}
                            />  
                      </li>                            
                    </Link>
                  )}
                  </ul>
                </div>

                  
                  
                </TabsContent>
                <TabsContent className="min-h-[250px]" value="finance">
                  <h2 className='text-xl md:text-2xl font-bold mb-3'>Financiamiento</h2>

                  <section  className='mb-7'>
                    <h2>Ultima ronda</h2>
                    {/* <Accordion type="single" collapsible className='px-12'>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <div className='flex justify-between items-center text-sm w-full'>
                            <div className='flex gap-4 items-center'>
                              <span
                                className='font-bold'
                              >Serie A
                              </span> 
                              <span
                                className='text-xs text-grey-500'
                              >14/05/2022</span>
                            </div>
                            
                             <span
                              className='text-xs text-grey-500'
                             >101.1M usd</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          <div className='flex justify-between items-center text-sm w-full'>
                            <div className='flex gap-4 items-center'>
                              <span
                                className='font-bold'
                              >Serie A
                              </span> 
                              <span
                                className='text-xs text-grey-500'
                              >14/05/2022</span>
                            </div>
                            
                             <span
                              className='text-xs text-grey-500'
                             >101.1M usd</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion> */}
                  </section>

                  <section>
                    <h2>
                      Inversionistas 
                    </h2>
                    <ul className='grid gap-7 grid-cols-3 lg:grid-cols-4'>
                      <li>
                       <Badge className='px-3'>{info.inversionista1}</Badge> 
                      </li>
                      <li>
                       <Badge className='px-3'>{info.inversionista2}</Badge> 
                      </li>
                      <li>
                       <Badge className='px-3'>{info.inversionista3}</Badge> 
                      </li>
                    </ul>
                  </section>
                </TabsContent>
                <TabsContent className="min-h-[250px]" value="analyzis">
                  <div>
                    <h2 className='text-xl md:text-2xl font-bold mb-3'>Analizis</h2>
                    {
                      info.link_analisis_kairos ?
                      <Link
                        href={info.link_analisis_kairos}
                        target="_blank"
                        className='underline w-full mx-auto'
                      >Visita nuestro analizis</Link>
                      :
                      <p>Estamos trabajando en este analizis!</p>
                    }
                    </div>

                  
                </TabsContent>
              </Tabs>
  )
}

export default InfoTabs